function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.94.104.205:48452",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 223.113.134.96:22222",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 101.32.52.39:7890",
        "SOCKS 166.62.88.163:45842",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 117.1.48.242:20019",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 95.165.82.189:1080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 117.1.48.242:20064",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}