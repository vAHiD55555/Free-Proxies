function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 36.255.98.184:4401",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 192.145.31.160:4145",
        "SOCKS 36.255.98.175:5170",
        "SOCKS 62.60.131.186:15265",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 193.181.35.172:8118",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 150.136.153.231:80",
        "SOCKS 3.216.111.113:80",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.189.112.133:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}