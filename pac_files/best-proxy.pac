function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.89.113.155:8080",
        "SOCKS 46.20.106.102:1080",
        "SOCKS 123.54.197.52:22023",
        "SOCKS 123.54.197.53:22219",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 8.209.96.245:89",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 123.54.197.53:20489",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 47.237.113.119:14",
        "SOCKS 123.54.197.16:23205",
        "SOCKS 123.54.197.51:23371",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}