function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 107.189.30.151:7890",
        "SOCKS 222.59.173.105:45192",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 103.136.150.44:8080",
        "SOCKS 43.208.25.125:8004",
        "SOCKS 18.143.165.238:9743",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 217.25.90.44:5050",
        "SOCKS 167.234.224.70:5060",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 152.53.36.101:20043",
        "SOCKS 47.236.169.53:1011",
        "SOCKS 15.160.186.74:521",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}