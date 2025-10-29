function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.120.61.189:43644",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 47.91.89.3:176",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 54.221.235.245:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 120.77.203.0:443",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}