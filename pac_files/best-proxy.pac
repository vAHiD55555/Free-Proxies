function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.192.44:24822",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 36.255.98.175:8047",
        "SOCKS 62.60.131.204:8899",
        "SOCKS 36.255.98.182:10716",
        "SOCKS 36.255.98.175:5170",
        "SOCKS 62.60.131.183:10084",
        "SOCKS 62.60.131.193:11657",
        "SOCKS 62.60.131.191:11308",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 62.60.131.191:11100",
        "SOCKS 37.120.162.180:11771",
        "SOCKS 152.53.171.242:39453",
        "SOCKS 62.60.131.204:7184",
        "SOCKS 36.255.98.160:5153",
        "SOCKS 152.53.171.242:49167",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 36.255.98.178:4394",
        "SOCKS 62.60.131.182:5091",
        "SOCKS 62.60.131.180:37562",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}