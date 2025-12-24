function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 129.153.107.221:80",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 139.177.229.18:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 139.177.229.88:8080",
        "SOCKS 192.252.211.193:4145",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}