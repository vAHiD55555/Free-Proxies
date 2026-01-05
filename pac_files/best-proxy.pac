function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.221.196.157:35904",
        "SOCKS 67.43.228.253:4407",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 103.133.26.119:8080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 163.5.128.150:14270",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 103.191.196.71:8199",
        "SOCKS 188.235.139.93:1080",
        "SOCKS 36.37.86.26:9812",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 120.77.203.0:443",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}