function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.22:20051",
        "SOCKS 47.237.172.201:1011",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 185.93.89.182:4730",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 152.70.236.84:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 124.115.21.11:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}