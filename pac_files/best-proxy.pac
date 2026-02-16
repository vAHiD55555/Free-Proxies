function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.5.128.116:14270",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 123.54.197.20:20327",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 152.53.136.194:10000",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 37.187.92.9:1030",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 123.54.197.17:21397",
        "SOCKS 123.54.197.25:23894",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 212.33.248.45:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}