function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 74.81.46.242:60007",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 42.118.0.73:16000",
        "SOCKS 171.237.99.213:1015",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 114.80.39.120:3081",
        "SOCKS 34.131.85.161:3128",
        "SOCKS 103.14.33.82:3128",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}