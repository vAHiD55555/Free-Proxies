function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 74.50.96.247:8888",
        "SOCKS 185.93.89.144:4270",
        "SOCKS 185.93.89.182:9084",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 208.87.243.199:7878",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 159.223.164.184:20172",
        "SOCKS 137.184.152.66:20172",
        "SOCKS 185.93.89.143:9354",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 78.12.193.250:16010",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}