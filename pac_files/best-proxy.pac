function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.10.252:1080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 67.43.236.18:15333",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 36.255.98.167:4144",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 62.60.131.205:4852",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 62.60.131.253:4145",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 62.60.131.253:4081",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 36.255.98.160:7023",
        "SOCKS 36.255.98.160:12126",
        "SOCKS 36.255.98.163:4249",
        "SOCKS 179.96.28.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}