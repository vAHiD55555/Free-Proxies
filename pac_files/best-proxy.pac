function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:5217",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 36.255.98.161:13570",
        "SOCKS 62.60.131.193:4054",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 36.255.98.168:6713",
        "SOCKS 62.60.131.204:4257",
        "SOCKS 36.255.98.151:15722",
        "SOCKS 194.233.73.36:8080",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 36.255.98.162:10809",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 36.255.98.163:5665",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 36.255.98.160:6690",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}