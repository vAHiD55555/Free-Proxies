function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 72.240.9.63:80",
        "SOCKS 190.93.189.142:999",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 52.38.230.247:3128",
        "SOCKS 115.127.182.126:2589",
        "SOCKS 45.189.252.240:999",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 192.145.31.160:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.55.224.6:8097",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}