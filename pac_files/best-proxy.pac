function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 88.210.10.79:5555",
        "SOCKS 45.166.93.113:999",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 194.28.61.21:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 3.85.42.63:3128",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 80.85.246.71:5555",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.143.89.9:1080",
        "SOCKS 181.129.183.19:53281",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 62.60.131.186:6124",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 80.253.246.238:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}