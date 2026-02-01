function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 79.110.52.252:3128",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 185.211.59.154:80",
        "SOCKS 161.35.70.249:80",
        "SOCKS 62.60.131.182:5365",
        "SOCKS 36.255.98.169:4249",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 95.163.153.116:44937",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 36.255.98.169:4002",
        "SOCKS 62.60.131.193:4218",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 62.60.131.193:10080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 95.111.226.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}