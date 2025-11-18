function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 161.97.181.217:8118",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 111.221.243.142:7895",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 155.94.163.199:1080",
        "SOCKS 43.153.64.222:16744",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}