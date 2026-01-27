function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.231.175.80:3000",
        "SOCKS 67.43.236.20:31241",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 36.255.98.184:17669",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 36.255.98.160:5975",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 36.255.98.160:6452",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 207.97.174.134:1080",
        "SOCKS 109.107.181.151:51553",
        "SOCKS 36.255.98.168:4100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}