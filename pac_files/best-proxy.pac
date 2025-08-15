function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.135.156.183:8080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}