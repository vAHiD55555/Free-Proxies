function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 166.249.54.64:7234",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 78.29.46.43:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 47.242.53.7:1111",
        "SOCKS 205.185.113.92:1080",
        "SOCKS 218.4.192.62:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}