function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 201.46.86.37:8080",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 91.144.45.166:8089",
        "SOCKS 5.104.206.191:1080",
        "SOCKS 38.180.235.32:1080",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 103.111.136.82:8199",
        "SOCKS 77.81.230.90:9050",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 45.61.133.104:7777",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 103.156.16.234:8818",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 194.163.174.78:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}