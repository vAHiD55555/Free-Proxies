function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.110.80.195:10149",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 103.155.198.128:3125",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 213.76.184.53:3128",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 202.43.162.2:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}