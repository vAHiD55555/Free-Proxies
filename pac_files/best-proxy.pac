function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.238.105.64:2024",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 122.3.87.41:8080",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 91.238.104.171:2023",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 14.189.225.247:8080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 155.94.163.199:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}