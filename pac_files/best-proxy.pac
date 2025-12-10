function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.161.35:16379",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 74.208.127.51:8080",
        "SOCKS 78.12.249.123:8796",
        "SOCKS 159.223.149.191:20202",
        "SOCKS 67.43.228.251:9217",
        "SOCKS 103.178.2.16:8199",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 129.153.107.221:80",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 152.53.171.242:29995",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 152.53.171.242:57981",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 195.154.43.198:39522",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}