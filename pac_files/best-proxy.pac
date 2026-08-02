function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.113.63.11:3128",
        "SOCKS 161.97.119.1:8888",
        "SOCKS 64.118.147.245:20000",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 82.209.251.53:45678",
        "SOCKS 93.174.49.203:33333",
        "SOCKS 176.12.65.24:443",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 104.161.23.122:5089",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 46.224.153.114:9050",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 37.194.204.99:3080",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 8.213.222.247:8123",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 88.218.206.170:22",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}