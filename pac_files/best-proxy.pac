function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.138.123.242:8082",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 35.161.94.92:1080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 47.250.155.254:80",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 125.164.209.173:3128",
        "SOCKS 125.77.135.240:80",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 1.53.72.195:16000",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 37.200.66.166:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}