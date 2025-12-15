function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:2493",
        "SOCKS 202.58.77.114:8080",
        "SOCKS 128.140.76.145:19498",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 82.26.150.55:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 52.202.30.36:80",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 202.40.190.154:1080",
        "SOCKS 62.60.131.26:8888",
        "SOCKS 128.140.76.145:14117",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 14.167.185.248:3128",
        "SOCKS 67.43.228.251:10865",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}