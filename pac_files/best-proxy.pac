function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 160.187.174.38:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 152.200.200.217:999",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 3.135.6.138:443",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 123.56.89.191:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}