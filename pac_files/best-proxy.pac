function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.227.187.75:8080",
        "SOCKS 119.18.151.113:8444",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 185.93.89.183:30004",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 8.217.231.95:1011",
        "SOCKS 185.93.89.181:6201",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 185.93.89.180:4100",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 15.160.181.77:8331",
        "SOCKS 185.93.89.143:14191",
        "SOCKS 103.105.57.98:7070",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}