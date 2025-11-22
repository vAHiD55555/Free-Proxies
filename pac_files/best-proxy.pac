function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.135.16.145:8789",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 45.77.156.171:9091",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 38.54.1.17:9999",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 51.16.56.189:9490",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 8.222.195.4:33333",
        "SOCKS 213.255.209.88:80",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 40.192.27.104:16825",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}