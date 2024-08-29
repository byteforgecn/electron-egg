
/**
 * 主进程与渲染进程通信频道定义
 * Definition of communication channels between main process and rendering process
 */
import {ipcApiRoute} from "@/api/main";
import {ipc} from "@/utils/ipcRenderer";
const test = ()=> {
  // 定义通信频道，即路由

// 避免重复监听，或者将 $ipc.on() 功能写到一个统一的地方，只加载一次
  ipc.removeAllListeners(ipcApiRoute.bluetooth);

// 监听，接收 服务端 event.reply()发送的数据
  ipc.on(ipcApiRoute.bluetooth, (event, result) => {
    console.log('[ipcRenderer] [ipcSendMsg] result:', result);

    self.messageString = result;
    // 调用后端的另一个接口
    // event.sender.send(ipcApiRoute.hello, 'electron-egg');
  })

// 发送请求到服务端
  ipc.send(ipcApiRoute.bluetooth, '参数')
}

export {
  test
}

