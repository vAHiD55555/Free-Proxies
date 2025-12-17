function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:29535",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 115.127.110.98:1080",
        "SOCKS 103.176.96.178:1111",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 203.189.158.218:1080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 45.166.93.113:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}