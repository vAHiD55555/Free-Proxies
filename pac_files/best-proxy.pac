function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 201.139.115.206:8081",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 115.127.179.150:2589",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 67.43.228.253:4407",
        "SOCKS 36.255.98.177:8889",
        "SOCKS 36.255.98.177:4554",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 163.5.128.114:14270",
        "SOCKS 202.43.162.2:8080",
        "SOCKS 203.217.169.26:8080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 8.211.49.86:9050",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 119.81.71.27:80",
        "SOCKS 103.82.23.118:6260",
        "SOCKS 62.60.131.179:4767",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}