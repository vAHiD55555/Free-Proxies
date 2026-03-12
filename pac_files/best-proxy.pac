function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.160.37.152:53281",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 206.123.156.220:5812",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 149.62.186.244:1080",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 36.95.245.7:8090",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 217.76.245.80:999",
        "SOCKS 182.253.93.3:53281",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 171.251.172.78:5110",
        "SOCKS 139.135.81.163:8082",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 138.2.47.198:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}