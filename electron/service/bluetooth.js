'use strict';

const { Service } = require('ee-core');
const noble = require('@abandonware/noble');


/**
 * 示例服务（service层为单例）
 * @class
 */
class BluetoothService extends Service {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * test
   */
  async test(args) {

    noble.on('stateChange', async (state) => {
      if (state === 'poweredOn') {
        console.log('开始扫描...');
        noble.startScanningAsync();
      } else {
        console.log('蓝牙未开启');
        noble.stopScanning();
      }
    });

    noble.on('discover', async (peripheral) => {
      console.log(`discover device: ${peripheral.advertisement.localName} - ${peripheral.id}`);

      // 假设你知道设备的 UUID
      // const targetUUID = '22a803432435';
      const targetUUID = 'dc21748b9596';

      if (peripheral.id === targetUUID) {
        await noble.stopScanningAsync();
        console.log('connect device...');

        await peripheral.connectAsync((error) => {
          if (error) {
            console.error('connect device error:', error);
            return;
          }
          console.log('connected:', peripheral.advertisement.localName);

          // 这里可以进行后续的透传操作
          // 例如：获取服务和特征
          peripheral.discoverServices(['ae30'], (error, services) => {
            services.forEach((service) => {
              console.log('uuid:', service.uuid);
              service.discoverCharacteristics(['ae01','ae02'], (error, characteristics) => {
                characteristics.forEach((characteristic) => {
                  console.log('characteristic.uuid:', characteristic.uuid);

                  // 如果是下发特征 AE01
                  if (characteristic.uuid === 'ae01') {
                    setInterval(()=>{
                      // 写数据
                      const data = Buffer.from("byteforge");
                      console.log('data', data);
                      characteristic.write(data, true, (error) => {
                        if (error) {
                          console.error('数据写入失败:', error);
                        } else {
                          console.log('数据写入成功');
                        }
                      });
                    },2000)
                  }

                  // 如果是上报特征 AE02
                  if (characteristic.uuid === 'ae02') {
                    // 监听通知
                    characteristic.on('data', (data, isNotification) => {
                      console.log('收到通知数据:', data.toString());
                    });

                    // 启用通知
                    characteristic.subscribe((error) => {
                      if (error) {
                        console.error('订阅通知失败:', error);
                      } else {
                        console.log('已订阅通知');
                      }
                    });
                  }
                });
              });
            });
          });
        });
      }
    });

    let obj = {
      status:'ok',
      params: args
    }

    return obj;
  }
}

BluetoothService.toString = () => '[class BluetoothService]';
module.exports = BluetoothService;
