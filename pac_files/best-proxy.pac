function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 200.59.186.179:999",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 68.71.240.210:4145",
        "SOCKS 62.60.131.182:15099",
        "SOCKS 89.130.35.141:1062",
        "SOCKS 157.10.135.73:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 124.248.184.144:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.56.205.84:8080",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 177.234.194.31:999",
        "SOCKS 36.255.98.152:9949",
        "SOCKS 148.251.86.68:16379",
        "SOCKS 8.148.24.225:83",
        "SOCKS 209.97.149.157:80",
        "SOCKS 62.60.131.191:12619",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 188.19.15.242:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}