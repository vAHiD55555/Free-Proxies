function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.93.173.58:9050",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 142.54.229.249:4145",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 51.158.70.181:16379",
        "SOCKS 183.80.8.212:16000",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 70.36.109.21:60009",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 8.219.97.248:80",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}