function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.205.153.110:51528",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 36.255.98.181:5420",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 62.60.131.253:4224",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 62.60.131.203:5131",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 115.190.91.223:7897",
        "SOCKS 95.163.153.116:44937",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 62.60.131.204:4704",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 36.255.98.167:4504",
        "SOCKS 36.255.98.160:8021",
        "SOCKS 36.255.98.153:16464",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 62.60.131.253:5317",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}