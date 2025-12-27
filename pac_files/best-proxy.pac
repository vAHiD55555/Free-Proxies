function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.93.169.232:60755",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 62.60.131.197:4672",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 8.148.23.202:8081",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}