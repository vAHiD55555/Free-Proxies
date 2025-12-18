function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 120.77.203.0:443",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.10.160.173:1225",
        "SOCKS 1.6.33.99:80",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 217.76.55.8:8888",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 137.184.14.135:3128",
        "SOCKS 67.43.228.251:30199",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 91.213.99.134:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}