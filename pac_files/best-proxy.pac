function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.202.103.223:29210",
        "SOCKS 27.79.210.34:16000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 42.118.225.165:16000",
        "SOCKS 200.174.198.86:8888",
        "SOCKS 57.128.188.167:8085",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 24.176.35.228:8080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 209.14.118.116:999",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 58.186.248.97:16000",
        "SOCKS 147.75.66.235:443",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 103.13.215.31:8081",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}