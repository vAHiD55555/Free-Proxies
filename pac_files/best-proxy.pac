function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 36.255.98.184:8858",
        "SOCKS 62.60.131.204:5057",
        "SOCKS 36.255.98.151:13126",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 62.60.131.253:9101",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 62.60.131.253:4094",
        "SOCKS 67.43.228.253:25987",
        "SOCKS 36.255.98.160:12126",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 15.204.231.254:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 36.255.98.169:12000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}