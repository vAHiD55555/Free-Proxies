function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 128.140.76.145:17923",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}