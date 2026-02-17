function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.51:23131",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 150.136.153.231:80",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 42.115.72.200:1081",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 85.214.244.174:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}