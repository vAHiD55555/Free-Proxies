function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.165.161.154:8395",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 128.140.76.145:17016",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 24.199.107.98:8080",
        "SOCKS 149.6.162.2:10357",
        "SOCKS 31.56.78.170:8181",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 159.223.32.95:8080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 138.68.73.161:1080",
        "SOCKS 117.74.65.207:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}