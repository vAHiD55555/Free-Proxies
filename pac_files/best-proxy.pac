function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 185.93.89.182:9999",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 185.93.89.180:9991",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 185.93.89.181:4857",
        "SOCKS 185.93.89.187:8187",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 185.93.89.155:4083",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}