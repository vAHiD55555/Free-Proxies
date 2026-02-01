function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.186:7636",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 36.255.98.154:4500",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 36.255.98.169:9443",
        "SOCKS 36.255.98.151:9015",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 36.255.98.178:8026",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 213.35.110.67:10907",
        "SOCKS 159.8.114.37:80",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 35.180.127.14:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}