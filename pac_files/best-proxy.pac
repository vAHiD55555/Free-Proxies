function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.197:4101",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 124.248.190.31:1080",
        "SOCKS 36.255.98.168:7642",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 36.255.98.153:12553",
        "SOCKS 62.60.131.194:6100",
        "SOCKS 62.60.131.179:6262",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 36.255.98.184:8698",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 91.107.170.243:6825",
        "SOCKS 36.255.98.163:14483",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 62.60.131.185:6757",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 36.255.98.160:4008",
        "SOCKS 62.60.131.185:8099",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}