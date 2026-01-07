function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.152:4164",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 1.20.169.193:8080",
        "SOCKS 83.171.252.150:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 36.255.98.152:5086",
        "SOCKS 62.60.131.191:12619",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 157.15.93.82:8080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 43.224.116.22:1120",
        "SOCKS 132.148.82.125:45605",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}