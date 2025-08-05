function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.76.159.121:8080",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 129.213.69.94:80",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 42.118.74.84:16000",
        "SOCKS 142.93.129.233:8180",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 95.84.156.71:1111",
        "SOCKS 103.181.255.219:7777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}