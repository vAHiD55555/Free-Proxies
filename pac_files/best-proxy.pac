function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.94:4145",
        "SOCKS 68.71.252.38:4145",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 212.34.140.200:5555",
        "SOCKS 199.68.196.157:10999",
        "SOCKS 62.60.131.197:4100",
        "SOCKS 14.19.176.188:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 103.82.23.118:6239",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 94.23.222.122:34392",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 37.53.90.82:12542",
        "SOCKS 147.75.83.117:80",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}