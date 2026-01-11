function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.30.17:8888",
        "SOCKS 114.231.75.238:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 67.43.236.20:17133",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 54.74.104.194:8299",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 116.80.47.51:3172",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 36.255.98.160:42717",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}