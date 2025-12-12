function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 2.189.106.29:5678",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}